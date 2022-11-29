import './SectionHeader.css';

function SectionHeader({ title }) {
    return (
        <>
            <h2 className='main__about-title'>{title}</h2>
            <hr />
        </>
    );
}

export default SectionHeader;