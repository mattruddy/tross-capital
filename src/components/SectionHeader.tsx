
interface Props {
    title: string
}

const SectionHeader = ({title}: Props) => {
    return (
    <h4>{title}</h4>
    )
}

export default SectionHeader