import React from 'react';

const Tag = (props) => {
    const tagDatas = props.tagsValue
    return (
        <div className='tags-container'>
            {tagDatas && tagDatas.map(tagData => {
                return (
                    <span key={tagData} className='tag'>
                        {tagData}
                    </span>
                )
            })
            }
        </div>
    );
};

export default Tag;