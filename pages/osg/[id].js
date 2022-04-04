import osg from ".";

// export const getStaticPaths = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json();
//     const paths = data.map(dat => {
//         return {
//             params: { id: dat.id.toString() }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }
// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
//     const data = await res.json();

//     return {
//         props: { osg: data }

//     }
// }
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(osg => {
        return {
            params: { id: osg.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { osg: data }
    }
}
const details = ({ osg }) => {
    return (
        <div>
            <h1>{osg.name}</h1>
            <p>{osg.email}</p>
            <p>{osg.website}</p>
            <p>{osg.address.city}</p>
        </div>
    );
}

export default details;