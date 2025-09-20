import { Article } from "./articles"
import { WhyHousesale } from "./why-housesale"
import { Phon } from "./phon"
import { Houses } from "./houses"
import { MoreCall } from "./more-call"

export const Main=()=>{
    return(
        <main className="container">
        <Article />
        <WhyHousesale />
        <Phon />
        <Houses />
        <MoreCall />
      </main>
    )
}