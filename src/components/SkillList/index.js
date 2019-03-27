import React from 'react'
import Color from 'color'
import thirdParty from '../../dataCollections/thirdParty'
import './skilllist.scss'

class SkillList extends React.Component {
    componentDidMount() {
        const skills = document.querySelectorAll('.skilllist__item')
        const skillsBackup = Array.from(skills)
        let rand
        let r = []

        ;(function showNextSkill() {
            setTimeout(function() {
                rand = Math.floor(Math.random() * skillsBackup.length)
                r.push(skillsBackup.splice(rand, 1))
                r[r.length - 1][0].classList.add('show')
                if (skillsBackup.length > 0) {
                    showNextSkill()
                }
            }, 10)
        })(10)
    }

    getCorrectColour(backColour) {
        let color = Color(backColour)
        if (color.isLight(backColour)) {
            return '#000'
        } else {
            return '#fff'
        }
    }

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
                        backgroundColor: thirdParty[skill].color,
                        color: this.getCorrectColour(thirdParty[skill].color),
                    }}
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
