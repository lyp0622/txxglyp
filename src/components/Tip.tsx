import React from 'react'
import styles from './Tip.module.scss'

const Tip = () => {

    return <div>
        <h3>新型肺炎预防须知</h3>
        <div className={styles.box}>
            <div className={styles.lrr}>
                <img className={styles.fanghu_icon} src="https://puui.qpic.cn/vupload/0/1580113954413_67dj6qw9r34.png/0" />
                <span className={styles.fanghu_title}>个人清洁</span>
            </div>
            <div className={styles.lr}>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>经常保持双手清洁，尤其在触摸口、鼻或眼之前。</div>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>经常用洗手液和清水清洗双手，搓手最少20秒，并用纸巾擦干。</div>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>打喷嚏或咳嗽时应用纸巾掩盖口鼻，把用过的纸巾弃置于有盖垃圾箱内，然后彻底清洁双手。</div>
                </div>
                <div className={styles.rr}>
                    <img className={styles.fanghu_icon} src="https://puui.qpic.cn/vupload/0/1580113954413_b3dr1w759hr.png/0" />
                    <span className={styles.fanghu_title}>尽量避免</span>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>减少前往人流密集的场所。如不可避免，应戴上外科口罩。</div>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>避免到访医院。如有必要到访医院，应佩戴外科口罩及时刻注重个人和手部卫生。</div>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>避免接触动物（包括野味）、禽鸟或其粪便；避免到海鲜、活禽市场或农场。</div>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>切勿进食野味及切勿光顾有提供野味的餐馆。</div>
                </div>
                <div>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>注意食物安全和卫生，避免进食或饮用生或未熟透的动物产品，包括奶类、蛋类和肉类。</div>
                </div>
                <div className={styles.rr}>
                    <img className={styles.fanghu_icon} src="https://puui.qpic.cn/vupload/0/1580113954413_qs8jz3v8m7.png/0" />
                    <span className={styles.fanghu_title}>尽快就诊</span>
                </div>
                <div className={styles.fanghu_item}>
                    <div className={styles.fanghu_item_point}></div>
                    <div className={styles.fanghu_item_text}>如有身体不适，特别是有发烧或咳嗽，应戴上外科口罩并尽快就诊。</div>
                </div>
            </div>

        </div>
    </div>
}
export default Tip
