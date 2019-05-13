class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenNum: 0,
      chosenText: ""
    };
  }

  changeImg() {
    this.setState({
      chosenNum: (this.state.chosenNum % 2) + 1
    });
    if (this.state.chosenNum == 1) {
      this.state.chosenText =
        "Chợt nhận ra bạn bè có mấy người mình có thể tin tưởng được đâu. Đ lúc k có việc, lúc mượn tiền còn này nọ, giờ nc cũng lơ lơ, chắc nó sùng QC hơn, QC giỏi mà, mình có là gì";
    }
    if (this.state.chosenNum == 2) {
      this.state.chosenText =
        "Hôm nay mình thấy lạ khi pm hỏi chuyện thằng Dương thì nó im re k nói năng gì, bình thường khi nc thì cũng tỏ ra hơn đời sành đời, theo kiểu đua ganh chứng tỏ hơn người.\n" +
        "Quang Cóc với Đại Dương, không khác nhau là mấy.\n" +
        "Chắc nó chỉ vui khi mình thất bại, chỉ vui khi nó chứng tỏ nó hơn mình.\n" +
        "Thêm cụ Huyền người mới cũng cố tỏ ra hơn mình, thật là lùng.\n" +
        "Càng lớn mình càng cảm thấy thất vọng vì các mối quan hệ ngày xưa mình xem trọng.\n" +
        "Có những người mình xem là bạn, là thân, nhưng cuối cùng là sự ngoảnh mặt, chỉ có ganh đua ghen ghét và dìm mình thì họ mới thỏa mãn.\n" +
        "Càng lớn con người ta càng cô đơn trong nỗi cô đơn của chính mình. Những mối quan hệ ngày xưa ngày càng nhạt nhòa.\n" +
        "Mình hứa là sẽ k để cho ai dìm mình nữa, xem thường mình nữa.";
    }
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.chosenText}</p>
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.changeImg.bind(this), 60000);
  }
}

ReactDOM.render(
  <div>
    <h1>Example 0 - Life</h1>
    <Life />
  </div>,
  document.getElementById("exampleRoot0")
);
