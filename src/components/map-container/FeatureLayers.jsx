import React, { useState, useRef } from 'react'
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material'

import WorkPermitIcon from '../../assets/features/WorkPermitIcon'
import RadiographyIcon from '../../assets/features/RadiographyIcon'
import RoadBlockadesIcon from '../../assets/features/RoadBlockadesIcon'
import FireWaterIcon from '../../assets/features/FireWaterIcon'
import GasDetectorIcon from '../../assets/features/GasDetectorIcon'
import MCPIcon from '../../assets/features/MCPIcon'
import VTSIcon from '../../assets/features/VTSIcon'
import CCTVIcon from '../../assets/features/CCTVIcon'
import ManpowerIcon from '../../assets/features/ManpowerIcon'

const FeatureLayers = ({ onFeatureSelect }) => {
    const [activeFeature, setActiveFeature] = useState(null);
    const scrollRef = useRef(null);

    const features = [
        { sno: 1, featureName: 'Work Permit', icon: WorkPermitIcon },
        { sno: 2, featureName: 'Radiography', icon: RadiographyIcon },
        { sno: 3, featureName: 'Road Blockades', icon: RoadBlockadesIcon },
        { sno: 4, featureName: 'Fire Water Net', icon: FireWaterIcon },
        { sno: 5, featureName: 'Gas Detectors', icon: GasDetectorIcon },
        { sno: 6, featureName: 'Manual Call Points', icon: MCPIcon },
        { sno: 7, featureName: 'Vehicle Tracking', icon: VTSIcon },
        { sno: 8, featureName: 'CCTV / IR Camera', icon: CCTVIcon },
        { sno: 9, featureName: 'Manpower', icon: ManpowerIcon },
    ];

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleFeatureClick = (sno) => {
        setActiveFeature(sno);
        onFeatureSelect(sno); // Notify parent about the selection
    };

    return (
        <div className="p-2 flex justify-between items-center mt-1 md:mt-2">
            <div
                className="rounded-lg bg-white p-1 mx-2 cursor-pointer shadow-customPurple"
                onClick={() => handleScroll("left")}
            >
                <KeyboardArrowLeftRounded color="primary" />
            </div>

            <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-4">
                {features.map((feature) => (
                    <div
                        key={feature.sno}
                        className={`rounded-lg bg-white p-1 flex min-w-fit items-center cursor-pointer
                            ${activeFeature === feature.sno
                                ? "shadow-customPink"
                                : "shadow-customPurple hover:scale-105"
                            } duration-300`}
                        onClick={() => handleFeatureClick(feature.sno)}
                    >
                        <feature.icon color={activeFeature === feature.sno ? '#EC1F24' : '#2E3192'} />
                        <p
                            className={`text-xs font-poppins ml-1 ${activeFeature === feature.sno
                                ? "text-[#EC1F24]"
                                : "text-[#2E3192]"
                            } font-medium px-1`}
                        >
                            {feature.featureName}
                        </p>
                    </div>
                ))}
            </div>

            <div
                className="rounded-lg bg-white p-1 mx-2 cursor-pointer shadow-customPurple"
                onClick={() => handleScroll("right")}
            >
                <KeyboardArrowRightRounded color="primary" />
            </div>
        </div>
    );
};

export default FeatureLayers;