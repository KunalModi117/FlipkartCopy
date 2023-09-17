export default function Button({ value, handleClick, id }: any) {
    return (
        <input type="button" value={value} onClick={handleClick} id={id} />
    );
}