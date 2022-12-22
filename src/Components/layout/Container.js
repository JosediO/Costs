import styles from './Container.css'

function Container(props){
    return(
        <div className={'container'}>
            <div>{props.children}</div>
        </div>
        
    )
}
export default Container