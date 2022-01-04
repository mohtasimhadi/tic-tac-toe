export default function Square(props: {value: number, onClick: any}) {
    return(
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}