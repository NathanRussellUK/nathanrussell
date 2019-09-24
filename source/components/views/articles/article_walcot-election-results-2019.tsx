import * as React from "react"

import "./article.scss";

export const WalcotElectionResults2019 = () => {
    return <div className="article">
        <h2>WALCOT ELECTION RESULTS 2019</h2>
        <p>The results for Walcot ward in the 2019 Bath and North East Somerset Council election were as follows:</p>
        <table>
            <thead>
                <tr>
                    <td>Election candidate</td>
                    <td>Party</td>
                    <td>Vote</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Richard Emlyn Samuel</td>
                    <td>Liberal Democrats</td>
                    <td>1050</td>
                    <td>Elected</td>
                </tr>
                <tr>
                    <td>Tom Davies</td>
                    <td>Liberal Democrats</td>
                    <td>930</td>
                    <td>Elected</td>
                </tr>
                <tr>
                    <td>Tim Morgan</td>
                    <td>Green Party</td>
                    <td>469</td>
                    <td>Not elected</td>
                </tr>
                <tr className="emphasis">
                    <td>Nathan Stanley Russell</td>
                    <td>Labour Party</td>
                    <td>284</td>
                    <td>Not elected</td>
                </tr>
                <tr>
                    <td>Isobel Mary Blackburn</td>
                    <td>Conservative Party</td>
                    <td>254</td>
                    <td>Not elected</td>
                </tr>
                <tr>
                    <td>Stuart Laurence Kay</td>
                    <td>Conservative Party</td>
                    <td>242</td>
                    <td>Not elected</td>
                </tr>
                <tr>
                    <td>Paul Tom Edward Tucker</td>
                    <td>Labour Party</td>
                    <td>225</td>
                    <td>Not elected</td>
                </tr>
            </tbody>
        </table>
        <p>Thank you to all the Walcot residents who came out to support us on polling day, to Paul Tucker and to the local team of activists that supported our campaign. I am very proud of what we have achieved.</p>
        <p>For the first time in Walcot since 2003, the Labour Party beat both the Tories and Greens on combined vote share; this result was also over double our share in the 2017 by-election. This fantastic result has put to bed the old Lib Dem line that only their candidates can beat the Tories, and in future local residents will be able to cast their votes without the nagging doubts of "tactical" voting.</p>
        <p>
            Nathan Russell<br />
            Labour candidate for Walcot in the 2019 local election
        </p>
    </div>
}