export default function Square(props: {value: string, onClick: any}) {
    return(
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}