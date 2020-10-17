
interface Props {
    title: string
}

const SectionHeader = ({title}: Props) => {
    return (
        <div className="SectionHeader">
            <h4 className="sec-c">{title}</h4>
        </div>
    )
}

export default SectionHeader