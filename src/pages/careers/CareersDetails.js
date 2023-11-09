import { useLoaderData, useParams } from "react-router-dom"

export default function CareersDetails(){
    const { id } = useParams()
    const career = useLoaderData()
    return (
        <div className="careers-details">
            <h2>Careers Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia veritatis mollitia ut consectetur, blanditiis, tempora facere labore dolores numquam, iste quis laboriosam dolorum obcaecati? Et cupiditate dicta earum dolore perferendis.</p>
            </div>
        </div>
    )
}


export const careerDetailsLoader = async ({params}) => {
    const { id } = params 

    const res = await fetch("http://localhost:4000/careers/" + id)

    if(!res.ok){
        throw Error('Could not find that career')
    }

    return res.json()

}