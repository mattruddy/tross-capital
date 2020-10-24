
interface Props {
    title: string
}

const SectionHeader = ({title}: Props) => {
    return (
        <div className="SectionHeader">
            <h4>{title}</h4>
        </div>
    )
}

export default SectionHeader