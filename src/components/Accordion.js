import React from 'react'

const Accordion = ({ items }) => {

    const renderedItem = items.map((item, index) => {

        const onTitleClick = index => {
            console.log('Title clicked', index)
        }

        return <React.Fragment key={item.title}>
            <div className="title active" onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })

    return (
        <div className="ui styled accordion">
            {renderedItem}
        </div>
    )
}

export default Accordion