// import React, { useState } from 'react'

// function StartLottery() {
//   this.setState({
//       highLightIndex: currentIndex
//   }, () => {
//           this.currentIndex += 1;
//           if (this.currentIndex > CYCLE_TIMES + 8 + this.uniformTimes && this.luckyOrder === currentOrder) {
//               clearTimeout(this.lotteryTimer);
//               // 完成抽奖，展示奖品弹窗等
//           } else {
//               if (this.currentIndex < CYCLE_TIMES) {
//                   //  CYCLE_TIMES = 30 次， 每次速度递加 10ms，
//                   this.speed -= 10;
//               } else if (this.currentIndex > CYCLE_TIMES + 8 + this.uniformTimes && this.luckyOrder === currentOrder + 1) {
//                   // 中奖前一次降速 80 急停效果
//                   this.speed += 80;
//               } else if(this.luckyOrder) {
//                   // 后端为返回结果是匀速旋转
//                   this.uniformTimes += 1;
//               else {
//                   this.speed += 20;
//               }
//               // 确保速度不能低于 50 ms
//               if (this.speed < 50) {
//                   this.speed = 50;
//               }
//               this.lotteryTimer = setTimeout(this.startLottery, this.speed);
//           }
//       }
//   );
// }


// export default StartLottery
