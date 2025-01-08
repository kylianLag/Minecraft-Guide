import { Link } from "react-router-dom";
function AnnoncePartage(props){
    return(
        <section className="call-to-action mt-10 bg-green-100 p-2 text-center" >
            <h2 className="mt-2 mb-2"><strong>Aidez nous !</strong></h2>
            <h3 className="text-lg font-bold">{props.titre}</h3>
            <p className="text-sm">{props.content}</p>
            <Link to="/community" className="text-blue-500 underline">
                En savoir plus
            </Link>
        </section>
    );
}

export default AnnoncePartage;