import { GoBackBtn } from '../components/GoBackBtn'
import img from '../assets/img/img__404.png'

export function NotFoundPage() {
    return (
        <div className='notfoundpage'>
            <div className='container'>
                <div className='notfoundpage__row'>
                    <div className='notfoundpage__column'>
                        <h1 className='notfoundpage__title'>
                            I have bad news for you
                        </h1>
                        <div className='notfoundpage__text'>
                            The page you are looking for might be removed or is
                            temporarily unvailable
                        </div>
                        <GoBackBtn />
                    </div>
                    <div className='notfoundpage__column'>
                        <img src={img} alt='404 FoodParadise' />
                    </div>
                </div>
            </div>
        </div>
    )
}
