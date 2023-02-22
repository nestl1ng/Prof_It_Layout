import './Body.scss'
import { ReactComponent as FirstPic } from './FirstPic.svg'
import OrderProjectBtn from '../Buttons/OrderProjectBtn'

 const BodyApp = () => {
  return (
    <div className='FirstStep'>
          <h1 className='MainText'>Prof<mark>it</mark> Разработчик программного обеспечения, веб-сервисов, мобильных приложений</h1>
        <div className='FirstSection'>
            <div className='ProjectBtn'>
                <OrderProjectBtn/>
            </div>
            <div className='PicWrap'>
              <FirstPic className='FirstPic'/>
            </div>
        </div>
    </div>
  )
}
export default BodyApp;