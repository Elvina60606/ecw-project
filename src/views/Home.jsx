import images from '@/assets/images/images.js';
import { useNavigate } from 'react-router';
import HomeSwiper from '../component/swiper/HomeSwiper';
import HotProductsContainer from '../component/utils/hotProducts/HotProductsContainer';

const Home = () => {
    const navigate = useNavigate();
    const handleNavigateToMemberRes =() =>{
        navigate('/member_registration')
    };
    
// ！！手機版banner第一張可麗露背景做改變。及swipe的pagination顏色改成深咖。
    return (<>
        <HomeSwiper />

        <section className="story-container">
                <div className="story-content text-primary-800">
                    <h3 className="fs-lg-1 mb-6">品牌故事</h3>
                    <p className="mb-4">
                        2020年，從日本結束兩年的甜點研習後回到台灣，心中始終懷抱著一個小小夢想 —— 擁有一家屬於自己的甜點店。於是，ONON CAKE 二溫菓子 誕生了。
                    </p>
                    <p className="mb-2">2022｜二溫菓子 品牌創立</p>
                    <p className="mb-2">2023｜中壢中原分店 開幕</p>
                    <p className="mb-4">2024｜桃園藝文分店 開幕</p>
                    <p>在平淡的生活中，用甜點找回你的心跳</p>
                </div>
                    <img className="cake-img" alt="杯子蛋糕"
                         src={images.cake}/>
                    <img className="cake2-img" alt="切片蛋糕" 
                         src={images.cake2}/>
                    <img className="cake3-img" alt="法國麵包" 
                         src={images.cake3}/>
                    <img className="vector11-img" alt="裝飾向量圖案1" 
                         src={images.vector1}/>
                    <img className="vector2-img" alt="裝飾向量圖案2" 
                         src={images.vector2}/>
                    <img className="vector3-img" alt="裝飾向量圖案3" 
                         src={images.vector3}/>
                    <img className="rectangle303-img" alt="背景波浪圖案"
                         src={images.rectangle303}/>
        </section>

        <HotProductsContainer />
        
        <section className="sub-section-bg">
                <img className="d-none d-lg-block" alt="背景波浪圖" 
                     src={images.rectangle304}/>
                <div className="container position-relative">
                    <div className="row my-8 my-lg-0">
                        <div className="col-12 col-lg-7 position-relative z-3">
                            <div className="py-lg-12 mb-8 mb-lg-0">
                                <img src={images.caneleSub} alt="可麗露圖" />
                            </div>
                        </div>
                      {/* Mobile */}
                        <div className="d-lg-none">
                            <div className="col-12">
                                <div className="text-center shape-bg mb-12">
                                    <img className="mb-6" alt="可麗露" 
                                         src={images.caneleVector}/>
                                    <h3 className="text-primary-800 mb-6">可麗露・寄甜計劃</h3>
                                    <h5 className="text-primary-700 mb-6">
                                        品嚐一顆可麗露，體現職人精神
                                        <br />
                                        將這份職人甜點，寄給未來的你
                                    </h5>
                                    <button type='button' 
                                            className="btn btn-primary">
                                            點我了解寄甜計劃
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                      {/* Desktop */}
                        <div className="d-none d-lg-block">
                        <div className="col-lg-7 pt-lg-12 position-absolute top-0 end-0 z-1">
                            <img src={images.vector4} alt="裝飾向量圖案4" />
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                                <div className="py-12 text-center">
                                    <img className="mb-6" alt="可麗露" 
                                         src={images.caneleVector}/>
                                    <h1 className="text-primary-800 mb-6">可麗露・寄甜計劃</h1>
                                    <h5 className="text-primary-700 mb-6">
                                        品嚐一顆可麗露，體現職人精神
                                        <br />
                                        將這份職人甜點，寄給未來的你
                                    </h5>
                                    <button type='button' 
                                            className="btn btn-primary">
                                            點我了解寄甜計劃
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
        </section>

        <section className="bg-primary-500">
                <div className="container">
                    <div className="py-8 py-lg-0">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="my-lg-12 pt-8 px-lg-8 py-lg-12 text-center text-lg-start">
                                    <h3 className="fs-lg-1 text-primary-800 mb-6">
                                        加入會員，即享首購不限金額88折
                                    </h3>
                                    <p className="fs-6 text-primary-700 mb-6">
                                        會員可享多重優惠：專屬折扣、紅利點數、生日優惠，現在加入會員，首購優惠與寄甜計畫合併使用，即贈經典原味可麗露乙份，贈品數量有限贈完為止，敬請把握優惠。本活動不可與其他優惠合併使用。
                                    </p>
                                    <button type='button' 
                                            className="btn btn-primary mb-6 mb-lg-0"
                                            onClick={()=>handleNavigateToMemberRes()}>
                                            點我手刀加入會員
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="pb-8 pb-lg-12 text-center text-lg-start">
                                    <img className="img-excess"
                                         src={images.joinUs}
                                         alt="加入會員插圖" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>)
}

export default Home;