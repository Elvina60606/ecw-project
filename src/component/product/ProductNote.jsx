import { useState } from "react";
import { useSelector } from "react-redux";

const ProductSpec = ({ product }) => (
  <>
    <div className="fs-lg-6 lh-24 text-neutral-800">
      <p>【規格】{product.content}</p>
      <p className="mb-4">【保存方式與最佳賞味期限】冷凍21天</p>
      <p>因台灣氣候悶熱，收貨後請一樣冷凍保存，以維持商品品質。</p>
      <p>本產品堅持不添加防腐劑，開封後請儘速食用完畢。</p>
      <p>強烈建議：「肚子裡」絕對是最好的保存位置。</p>
    </div>
  </>
);
const ProductInfo = () => (
  <>
    <ul className="fs-lg-6 lh-24 text-neutral-800 product-detail-list">
      <li>本產品含有牛奶、蛋、麩質的穀類，不適合其過敏體質者食用。</li>
      <li>訂單完成付款後，接單按訂單順序安排製作出貨。</li>
      <li>若有希望到貨日期，請先私訊確認。</li>
      <li>本店無提供外島配送之服務。</li>
    </ul>
  </>
);
const ProductDelvery = () => (
  <>
    <ul className="fs-lg-6 lh-24 text-neutral-800 product-detail-list">
      <li>此商品為冷凍寄出。</li>
      <li>為保證品質，此商品皆以「冷凍」宅配寄出。</li>
      <li>部分商品可存放於不同溫層，較低溫層宅配寄出。</li>
      <li>如遇商品溫層互不相容，請分開下單，運費無法合計。</li>
    </ul>
  </>
);

const ProductNote = () => {
  const tabs = [
    {
      key: "product",
      label: "商品規格",
      icon: "sms",
      component: ProductSpec,
    },
    {
      key: "note",
      label: "注意事項",
      icon: "info",
      component: ProductInfo,
    },
    {
      key: "delivery",
      label: "宅配寄送",
      icon: "delivery_truck_speed",
      component: ProductDelvery,
    },
  ];

  const { product } = useSelector((state) => state.products);
  const [activeTab, setActiveTab] = useState("product");

  return (
    <>
      <section className="tabs-container py-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tabs-inner-wrapper">
                <nav className="nav nav-tabs tabs-nav-top nowrap gap-2 mb-lg-6">
                  {tabs.map((tab) => (
                    <button
                      type="button"
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`tabs-nav-link fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6 ${activeTab === tab.key ? "active" : ""}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>

                <div className="tab-content tabs-content-bottom">
                  {tabs.map((tab) => {
                    const Content = tab.component;

                    return (
                      <div
                        className={`tab-pane fade show ${activeTab === tab.key ? "active" : ""} `}
                        key={tab.key}
                      >
                        <h4 className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                          <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">
                            {tab.icon}
                          </span>
                          {tab.label}
                        </h4>
                        <Content product={product} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="rectangle303-svg"
          src="https://raw.githubusercontent.com/Elvina60606/onon_images/bf289cf840855ec8798a73a81397fe3f3a596d03/products-img/Rectangle303.svg"
          alt="背景波浪圖案"
        />
      </section>
    </>
  );
};

export default ProductNote;
