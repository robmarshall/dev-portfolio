import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import {
    GetCorrectTextColour,
    GetAccessibleBackColor,
} from '../../utils/helpers/SkillColor'
import thirdParty from '../../dataCollections/thirdParty.json'
import './skilllist.scss'

class SkillList extends React.Component {
    render() {
        const skills = [
            'aws',
            'capacitor',
            'circleci',
            'cypress',
            'sass',
            'js',
            'react',
            'es6',
            'node',
            'wordpress',
            'gatsby',
            'gulp',
            'git',
            'webpack',
            'jest',
            'netlify',
            'reacttestinglibrary',
            'storybook',
        ]

        skills.sort()

        let skillList = skills.map((skill) => {
            if (thirdParty[skill]) {
                return (
                    <li
                        key={thirdParty[skill].title}
                        className="skilllist__item"
                    >
                        <OutboundLink
                            className="skilllist__item__link"
                            title={`External link to ${thirdParty[skill].title}`}
                            href={thirdParty[skill].link}
                            style={{
                                backgroundColor: GetAccessibleBackColor(
                                    thirdParty[skill].color
                                ),
                                color: GetCorrectTextColour(
                                    thirdParty[skill].color
                                ),
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {thirdParty[skill].title}
                        </OutboundLink>
                    </li>
                )
            }

            return null
        })

        return (
            <div className="skilllist">
                <p className="skilllist__title">I use:</p>
                <ul className="skilllist__list">{skillList}</ul>
            </div>
        )
    }
}

export default SkillList
