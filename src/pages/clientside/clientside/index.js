import { useState } from "react"
import { useRouter } from "next/router"
function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchEmail = async () => {
        const response = await fetch('http://localhost:4000/events?email=Lew@alysha.tv')
        const data = await response.json()
        setEvents(data);
        router.push('/clientside/clientside?email=Lew@alysha.tv', undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={fetchEmail}>Filter Email</button>
            <h1>List of events</h1>
            {
                events.map((event) => {
                    return (
                        <div key={event.id}>
                            <h2>
                                {event.id} || {event.name} || {event.email}
                            </h2>
                            <h4>{event.body}</h4>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}
export default EventList;

export async function getServerSideProps(context) {
    const { query } = context
    const { email } = query
    const queryString = email ? 'email=Lew@alysha.tv' : ""
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    return {
        props: {
            eventList: data,
        }
    }
}