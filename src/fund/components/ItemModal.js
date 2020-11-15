import React, { useState } from 'react'

import '../styles/FundModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Radio } from 'antd'
import { InputNumber } from 'antd'
import { Input } from 'antd'


function ItemModal(props) {
  // const { visible, setVisible } = props
  const { show, setShow } = props
  const { item } = props
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { changeshow, setChangeShow } = props

  const [inputprice, setInputPrice] = useState('')
  const [inputtext, setInputText] = useState('')

  function onChange(value) {
    console.log('changed', value)
  }
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>感謝您成為我們的天使贊助人</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="e_par">
            {/* <div className="text"> */}
            <div className="text1">募資條款須知：</div>

            <div className="tb">
              <div className="text"> 一、接受條款</div>
              Chedemy所提供的服務包含Chedemy網站，以及Chedemy網站有關的任何其他功能、內容或應用程式（合稱
              “ Chedemy服務 ” ）。無論您是以 “ 訪客 ”
              （表示您只是瀏覽Chedemy網站），還是 “ 會員 ”
              （表示您已在Chedemy註冊）的身份，使用Chedemy服務即表示您同意遵守使用條款（下稱
              “ 本條款 ” ）。 “ 用戶 ” 一詞泛指訪客以及會員。
              如果您想成為Chedemy會員，並與其他會員交流（包括通過Chedemy服務連接到的會員和Chedemy社群的會員），以及使用Chedemy服務，請您務必詳細閱讀本條款，並在註冊過程中選擇同意接受本條款。本條款的內容包括接受Chedemy服務和在Chedemy網站上發佈內容的規定、您使用Chedemy服務所享有的權利、承擔的義務和對使用Chedemy服務所受的限制、以及Chedemy的隱私條款。如果您選擇使用某些Chedemy服務，您可能會收到要求您下載程式或內容的通知，和/或要求您同意附加條款和條件的通知。
              <div className="text"> 二、條款修改</div>
              Chedemy有權隨時修改本條款文本中的任何條款。一旦Chedemy對本條款進行修改,Chedemy將會以公告形式發布通知。任何修改將於發布之時起生效。如果您在修改發布後，繼續使用Chedemy所提供的所有服務，則表示您同意遵守對本條款所作出的該等修改。因此，請您務必定期查閱本條款，以確保了解所有關於本條款的最新修改。如果您不同意Chedemy對本條款進行的修改，請您離開Chedemy網站並立即停止使用Chedemy服務。同時，您應刪除您的個人檔案並註銷您的會員資格。
              <div className="text">三、遵守法律</div>
              當使用Chedemy服務時，您必須遵守中華民國法律。您只有在同意遵守所有適用的相關法律法規和本條款時，才有權使用Chedemy服務（無論您是否為訪客或決定使用此服務）。請您仔細閱讀本條款並將其妥善保存。
              <div className="text">四、用戶帳號、密碼及安全</div>
              無論訪客或會員，都可以瀏覽Chedemy的內容，但使用Chedemy的服務之前，用戶必須要登記並成為會員。本網站提供使用者Facebook登入與Chedemy網站內註冊兩種方式成為會員。成為會員的過程中，用戶應提供及時、詳盡、準確的個人資料，包含設定一組用戶賬號以及密碼。並不斷更新註冊資料，符合及時、詳盡、準確的要求。所有原始鍵入的資料將引用為註冊資料。如發生註冊不完整或不真實的情況，此情況視為違反使用條款，Chedemy有權利終止您的服務。Chedemy不對任何因註冊信息不真實而引起的問題、以及問題發生所帶來的後果承擔責任。
              用戶在申請帳號時，不應該使用模仿他人姓名或者任何會侵害踏人權益的帳號。另外使用攻擊性的字眼或任何種族歧視的文字當作帳號名稱，Chedemy有權利終止此帳號的服務。
              用戶不應將其帳號、密碼轉讓或出借給他人使用。如用戶發現其帳號遭他人非法使用，應立即通知Chedemy。因駭客行為或用戶的保管疏忽導致帳號、密碼遭他人非法使用，Chedemy網站不承擔任何責任。
              <div className="text">五、隱私權政策</div>
              您提供的註冊信息及Chedemy保留的有關您的若干其它資料將受到中華民國有關隱私的法律和本公司《隱私權政策》之規範。
              <div className="text">六、使用規定和條約</div>
              遵守使用規定的前提下，用戶在使用Chedemy所有服務時，必須要遵守使用條款的所有規定。任何經由Chedemy服務上傳、張貼、發送電子郵件或任何其它方式傳送的文字、文件、影片、照片（包括您自己的照片）、圖片、聲音、音樂作品、創作作品或任何其他內容（以下簡稱
              “ 內容 ”
              ），無論為公開傳送還是私下傳送，均由內容提供者承擔責任。Chedemy無法經由本服務傳送的內容，因而不保證內容的正確性、完整性或品質。在使用本服務時，可能會接觸到令人不快、不適當或令人厭惡之內容。在任何情況下，Chedemy均不為任何內容負責，包含但不限於任何內容的任何錯誤或遺漏，以及經由本服務以張貼、發送電子郵件或其它方式傳送任何內容而衍生的任何損失或損害。但Chedemy有權依法停止傳輸任何前述內容並採取相應行動，包括但不限於暫停用戶使用本服務的全部或部分，保存有關記錄，甚至採取法律行動。
              用戶在使用Chedemy服務時，必須遵守中華民國相關法律法規的規定，用戶應同意將不會利用本服務進行任何違法或不正當的活動，並上傳、展示、分享、傳播或以其它方式傳送含有下列內容之一的任何訊息（包括但不限於下列行為）∶
              違反任何個人或組織的專利，商標，商業機密，著作權，發布權以及其他的權利，並違反中華民國法律或是現有合約規範。
              任何錯誤，誤導，虛假和不正確的資訊。
              任何違反他人（包含第三方）隱私的行為。
              未經同意的廣告，宣傳，垃圾信件，以及廣告連結（包含 Facebook
              的分享等等）。
              包含軟體的病毒，或任何電腦中可以干擾傷害或者限制跟干擾任何使用軟體硬體或者通訊器材，或者竊取系統密碼資料或者任何聯結的檔案程式碼或軟體。模仿任何公司企業或個人（包含企業員工以及第三方）的資訊。
              另外，用戶（包含訪客以及會員）不得為任何非法目利用Chedemy服務從事以下活動：
              未經允許，進入Chedemy網站系統（包含後台主機以及任何提供Chedemy服務的設備，以下簡稱“Chedemy網站系統”）或者使用Chedemy電腦系統；
              未經允許，對Chedemy網站系統進行刪除、修改或者增加；
              未經允許，對進入Chedemy網站系統中儲存、處理或者傳輸的數據和應用程式進行刪除、修改或者增加；
              故意製作或傳播電腦病毒等破壞性程序及其他危害Chedemy網站系統安全的行為。
              如用戶在使用網站服務時違反任何上述規定，Chedemy或其授權的人有權要求用戶改正或直接採取一切必要的措施（包括但不限於更改或刪除用戶張貼的內容等、暫停或終止用戶使用網絡服務的權利）以減輕和消除用戶不當行為造成的影響。用戶不得對本服務任何部分或本服務之使用或獲得，進行複制、拷貝、出售、轉售或用於任何其它商業目的。
              用戶須對自己在使用Chedemy服務過程中的行為承擔法律責任。用戶承擔法律責任的形式包括但不限於：對受到侵害者進行賠償，以及在Chedemy網站首先承擔了因用戶行為導致的行政處罰或侵權損害賠償責任後，給予Chedemy網站等額的賠償。
              <div className="text">七、贊助以及商業行為規定</div>
              Chedemy是一個集合群眾並贊助創意的平台。Chedemy允許部份的使用者（提案人）將創意提出並尋求第三方（贊助者）的贊助。Chedemy使用的金流服務協力廠商為立吉富線上金流股份有限公司的
              Paynow 和藍新科技股份有限公司建置之「藍新金流
              NewebPay」。透過本網站存取協力廠商服務時，會請您同意接受協力廠商新的條款及條件。Chedemy不會對您與該協力廠商之間的糾紛負責。
            </div>
          </div>
          <div className="e_check">
            <Radio >以詳閱募資條款</Radio>
          </div>
          <div className="e_my">
            欲贊助金額：
            <InputNumber
              defaultValue={123000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              onChange={onChange}
              // value={setInputPrice}
            />
          </div>
          <div
            className="e_input"
            onClick={() => {
              setChangeShow(1)
            }}
          >
            想對設計師說的話：
            <Input placeholder="此欄非必填" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button variant="primary" onClick={handleClose}>
            贊助
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ItemModal
