const Tile = ({ imageSrc, title, paragraphs }) => {
    return (
        <section>
            {imageSrc ? (
                <img src={imageSrc} alt={title} />
            ) : (
                <>
                <h2>{title}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                </>
            )}
        </section>
    )
}
export default Tile;