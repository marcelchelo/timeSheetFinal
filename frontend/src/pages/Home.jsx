import {Link} from 'react-router-dom'
import {FaDigitalTachograph , FaHardHat} from 'react-icons/fa'
function Home (){
    return(
        <>
        <section className='heading'>
        <p>Please choose from an option below</p>
        </section>
        


        <section >
            <div>

            <Link to="/dashboard/users" className='btn btn-block btn-reverse'> <FaHardHat/> Search by Workers</Link> 

            <Link to="/dashboard/" className='btn btn-block btn-reverse'  > <FaDigitalTachograph/> Search by Sites</Link> 


            </div>
        </section>
        </>
    )
}

export default Home