import { NavLink } from "react-router-dom"
import dragonfly from "../images/dragonfly.gif"

const Welcome = () => {
    return (
        <div className="text-center font-bold">
            <h1>Hello, my friend!</h1>
            <img src={dragonfly} alt="MegaNeura" />
            <h2>My name's Meganeura!</h2>
            <p className="font-20">
                I am a giant prehistoric dragonfly! I lived on Earth about 300 million years ago. People think I'm extinct, but actually, I just moved to another planet! My new home is the planet Gliese 581 c. It's very hot, but it's the right climate for me. It's 20 light years away from Earth. Imagine that! If you travel at the speed of light, it takes 20 years to reach my planet.
            </p>
            <p className="font-20">
                I've come all this way to teach you the new technologies my planet's inhabitants have.
            </p>
            <p className="font-20">
                Let's start by learning programming languages. These are languages that are not spoken or messaged, but are used to write computer programs!
            </p>
            <p className="font-20 mb-10">
                If you're ready, then...
            </p>
            <p className="font-20">
                <NavLink to="/trainer" className="link">Let's go!</NavLink>
            </p>
        </div>
    )
}

export default Welcome