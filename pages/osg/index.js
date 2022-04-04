import styles from '../../styles/osg.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            osg: data
        }
    }
}

const osg = ({ osg }) => {
    return (
        <div>
            <h1>All Osg</h1>
            {osg.map(os => (
                <Link href={'/osg/' + os.id} key={os.id}>
                    <a className={styles.single}>
                        <h3>{os.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default osg;
