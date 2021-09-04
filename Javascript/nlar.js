var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Nói một xíu về bản thân tôi";
	$scope.updateInfo = "Cập nhật ngay bây giờ";
	$scope.verify = "Verify";
	$scope.des = "Mô tả về tôi!";
	$scope.cv = "Công việc";
	$scope.job1 = "Real Estate Broker ";
	$scope.job2 = "999,999,999";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "taisv@datxanhmientay.net";
	$scope.contact2 = "Văn Tài";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Cùng giao lưu, chia sẽ về thị trường Bất Động Sản Miền Tây";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "SnapChat";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/profile.php?id=100071895150475";
	$scope.linkzl = "https://zalo.me/0868423137";
	$scope.linksc = "https://www.snapchat.com/add/van_tai1601";
	$scope.linkgm = "sontai1601.2000@gmail.com";
	$scope.phonenumber = "0868423137 - VIETTEL";
	$scope.email = "sontai1601.2000@gmail.com";
	$scope.title2 = "Câu chuyện của tôi";
	$scope.contentStory1 = "Tôi sẽ kể cho bạn câu chuyện của tôi bắt đầu từ lúc quyết tâm tham gia phỏng vấn Dù không kinh nghiệm, bằng cấp cũng chẳng liên quan và cũng không biết bắt đầu từ đâu, nhưng tôi quyết định đăng ký và đi tham gia phỏng vấn, thật tốt vì cuộc phỏng vấn kết thúc một cách nhẹ nhàng và tôi được nhận việc vào đầu tuần sau. Tôi tạm gác lại những thắc mắc vì niềm vui có việc làm đúng mục đích kiếm tiền nhiều đã đạt được.Có vẻ như tuần đầu tiên may mắn mọi thứ vẫn rất màu hồng, trainning, giao lưu kết bạn. Tôi cảm thấy thật đơn giản thật, tôi tự tin sẽ kiếm được nhiều tiền. Sau đó tôi bắt đầu nhập cuộc, được may mắn làm việc trong môi trường thân thiện, được Sếp quan tâm, được đồng nghiệp hỗ trợ nhiệt tình. Tôi được giao chỉ tiêu trong 1 tháng chỉ cần có 1 giao dịch (tức là bán được 1 sản phẩm) và tất nhiên là 1,5–3% hoa hồng/sản phẩm là động lực giúp tôi hòa nhập thật nhanh. Tôi bắt đầu tìm một đồng nghiệp có kinh nghiệm để học hỏi kinh nghiệm tư vấn và hướng dẫn tôi cách tìm khách hàng.";
	$scope.contentStory2 = "Công việc đầu tiên của tôi là đi phát tờ rơi. Tôi nhớ những hôm phải phơi mình dưới nắng nóng, cầm từng tờ rơi, ngay ngã tư, chưa bao giờ tôi lại thấy ngại ngùng như thế. Ánh mắt họ nhìn tôi, có người coi thường, có người bỡn cợt… Bị đuổi như đuổi tà khi cầm xấp tờ rơi 500 tờ đến một công ty gần dự án. Có lần tôi gõ cửa một căn nhà xin tiếp kiến, nhưng khi tôi giới thiệu mình là “nhân viên kinh doanh bất động sản”, người ta đuổi đi và đóng sầm cửa trước mặt tôi. Tôi giận run lên. Họ thật mất lịch sự.Mặc dù vậy............";
	$scope.storytitle1 = "NGHỀ KINH DOANH BẤT ĐỘNG SẢN: LÀM SAO ĐỂ THÀNH CÔNG?";
	$scope.storytitle2 = "CÔNG VIỆC SALE BẤT ĐỘNG SẢN BẮT ĐẦU";
	$scope.nothinglikeus = "Cảm ơn bạn đã xem";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});