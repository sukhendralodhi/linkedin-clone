import "../Input-options/InputOption.css";

const InputOption = (props) => {
    const { Icon, title, color } = props;
    return (
        <div className="inputOption">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption;