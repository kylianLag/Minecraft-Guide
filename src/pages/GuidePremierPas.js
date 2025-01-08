
import { Link } from 'react-router-dom';
import MinecraftButton from '../components/MinecraftButton';
function GuidePremierPas(){
    return(
        <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">
            <div className='flex '>
                <Link to = "/guide"><MinecraftButton text="Page Précedente"/></Link>
                <Link to = "/guide/Artisanat"><MinecraftButton text="Page Suivante"/>
                </Link>
            </div>
        </main>
    );
}
export default GuidePremierPas;