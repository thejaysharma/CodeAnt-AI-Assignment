import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ToggleSwitch({ options, onSelect }) {

    const [selected, setSelected] = useState(options[0]);

    const handleClick = (option) => {
        setSelected(option);
        if (onSelect) onSelect(option);
    };

    return (
        <div className="bg-[#FAFAFA] rounded-lg w-full border border-[#E9EAEB] grid" style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(option)}
                    className={`py-3 md:py-4 px-3.5 rounded-lg text-xl not-italic font-semibold leading-7 transition-colors ${selected === option
                        ? "bg-[#1570EF] text-white border-2 border-[rgba(255,255,255,0.12)]"
                        : "bg-transparent text-[#414651]"
                        }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

ToggleSwitch.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func,
};
