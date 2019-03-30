import React from 'react'
import {
    GetCorrectTextColour,
    GetAccessibleBackColor,
} from '../../utils/helpers/SkillColor'
import thirdParty from '../../dataCollections/thirdParty'
import './skilllist.scss'

class SkillList extends React.Component {
    render() {
        const skills = [
            'sass',
            'js',
            'react',
            'es6',
            'node',
            'wordpress',
            'gatsby',
            'grav',
            'gulp',
            'git',
            'webpack',
        ]

        skills.sort()

        let skillList = skills.map(skill => (
            <li key={thirdParty[skill].title} className="skilllist__item">
                <a
                    className="skilllist__item__link"
                    title={`External link to ${thirdParty[skill].title}`}
                    href={thirdParty[skill].link}
                    style={{
                        backgroundColor: GetAccessibleBackColor(
                            thirdParty[skill].color
                        ),
                        color: GetCorrectTextColour(thirdParty[skill].color),
                    }}
                    title="This link will open a new tab to the skill information page"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {thirdParty[skill].title}
                </a>
            </li>
        ))

        return (
            <div className="skilllist">
                <p className="skilllist__title">I use:</p>
                <ul className="skilllist__list">{skillList}</ul>
            </div>
        )
    }
}

export default SkillList
