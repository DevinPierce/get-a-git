import React from 'react';

export default function UserInfoDisplay(props) {

  function renderInfo() {
    if (props.infoType === 'text'){
      return (
        <div className="info-display__user">
          <span className='user-info__label'>{props.label}: </span>
          <span className='user-info__value'>{props.value ? props.value : 'No information given'}</span>
        </div>
      )
    } else if (props.infoType === 'url'){
      return (
        <div className="info-display__user">
          <span>
            {
              props.value ?
              <a
                href={props.value}
                target="_blank"
                rel="noopener noreferrer"
                >
                  {props.label}
                </a>
                :
                <span className='user-info__value'>
                  {props.label + ': No information given'} 
                </span>
            }
          </span>
        </div>
      )
    } else if (props.infoType === 'boolean'){
      return (
        <div className="info-display__user">
          {
            props.value ?
            <span className='user_info__value'>Yes</span>
            :
             <span className='user_info__value'>No</span>
          }
         </div>
       )
    } else if (props.infoType === 'image'){
      return (
        <div className="info-display__user">
          <img className='user-info__avatar' src={props.value} alt="avatar" />
        </div>
      )
    }
  }

  return (
    renderInfo()
  )

}
