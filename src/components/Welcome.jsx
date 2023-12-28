import { NavLink } from "react-router-dom"
import dragonfly from "../images/dragonfly.gif"

const Welcome = () => {
    return (
        <div className="text-center font-neucha font-bold font-20 bg-center bg-fixed bg-space bg-cover">
            <div className="bg-mask-3">
                <h1>Hello, my friend!</h1>
                <img src={dragonfly} alt="MegaNeura" />
                <h2>My name's MegaNeura!</h2>
                <p>
                    I am a giant prehistoric dragonfly! I lived on Earth about 300 million years ago. People think I'm extinct, but actually, I just moved to another planet! My new home is the planet Gliese 581 c. It's very hot, but it's the right climate for me. It's 20 light years away from Earth. Imagine that! If you travel at the speed of light, it takes 20 years to reach my planet.
                </p>
                <p>
                    I've come all this way to teach you the new technologies my planet's inhabitants have.
                </p>
                <p>
                    Let's start by learning programming languages. These are languages that are not spoken or messaged, but are used to write computer programs!
                </p>
                <p>
                    If you're ready, then...
                </p>
                <p>
                    <NavLink to="/trainer" className="link">Let's go!</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Welcome