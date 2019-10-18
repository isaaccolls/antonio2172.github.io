import React from 'react';
import './ProgressBar.css';;

function ProgressBar(props) {
    let skill = props.skill;
    console.log("skills motherfuckers", skill);

    return (
        <div className="my-progress-bar">
            <div className="my-progress-bar-label-left">
                {skill.skill}
            </div>

            <div className="wrapper-testing">
                <div className="my-progress-bar-tracker">
                    <div className="filler" style={{ width: `${skill.percent}%` }}>
                    </div>
                    <div className="my-progress-bar-label-right">
                        { skill.percent }
                    </div>
                </div>
            </div>

        </div>
    );;
}

export default ProgressBar;
