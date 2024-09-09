import './App.css'
import Button from './components/ButtonComponent.jsx'
import Product from './components/ProductComponent.jsx'
import Tile from './components/TileComponent.jsx'
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'


function App() {
    //Functie om de tekst van de button in de console te tonen
    const handleClick = (text) => {
        console.log(text)
    };

    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection" onClick={() => handleClick('to the collection')} disabled={false}/>
                <Button text="shop all bags" onClick={() => handleClick('shop all bags')} disabled={false}/>
                <Button text="pre-order" onClick={() => handleClick('pre-order')} disabled={true}/>
            </nav>

            <main>
                <Product
                    label="Best Seller"
                    imageSrc={bag1}
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best Seller"
                    imageSrc={bag2}
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="The simple bag"
                    imageSrc={bag3}
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="The trendy bag"
                    imageSrc={bag4}
                    name="The trendy bag"
                    price="€150,-"
                />

            </main>

            <footer>
                <Tile
                    title="The Brand"
                    paragraphs={[
                        "Lorem ipsum dolor sit amet. consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.",
                        "Lorem ipsum dolor sit amet. consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt."
                    ]}
                />
                <Tile
                    imageSrc={brand}
                />
                <Tile
                    imageSrc={ourStory}
                />
                <Tile
                    title="Our Story"
                    paragraphs={[
                        "Lorem ipsum dolor sit amet, consectetur adisicing elit. Blanditiis eligendi exercitationem illo, labore laboriasam nihil omnis praesentium. Aspernatur cum delenti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tentur veniam!"
                    ]}
                />
            </footer>
        </div>
    )
}

export default App
