
// youtube resize
$(window).resize(function() { resizeYoutube() })
function resizeYoutube(){
  $(".popup-video").each(function(){
    if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ) {
      $('.popup-body').css("width", "100%");
      $('.popup-body').css("height", Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");
      $(this).css("width", "100%");
      $(this).css("height", Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");
    }
  })
}
  
$(document).ready(function() {
  $('#my_popup').popup({
    transition: 'all 0.5s',
    onclose: function() {
      setTimeout(function() {
        $('.popup-video').attr('src', '')
      }, 500);
    }
  });
  
  var opts = {
    defaultView: 'month',
    height: 1200,
    header: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    editable: true,
    // eventLimit: true, // allow "more" link when too many events
    events: [{
      id: "20180208",
      title: '권태│발매 ',
      description: '귤(GYUL) _ 권태 Digital Single',
      link: 'https://www.youtube.com/embed/6N3nT9QHHA4',
      start: '2018-02-08T12:00:00',
      end: '2018-02-08T14:00:00',
      id: "20180329",
    },{
      title: '달달해│발매 ',
      description: '시우(XIU) _ 달달해 (Sweet) Digital Single',
      link: 'https://www.youtube.com/embed/faTN_tInE5o',
      start: '2018-03-29T12:00:00',
      end: '2018-03-29T14:00:00',
    },{
      id: "20180405",
      title: '귀차니즘│발매',
      description: '제이씨와 _ 귀차니즘 (Laziness) Digital Single',
      link: 'https://www.youtube.com/embed/zYcvdEBAu5s',
      start: '2018-04-05T12:00:00',
      end: '2018-04-05T14:00:00',
    },{
      id: "20180405",
      title: '나너 좋아해│발매',
      description: 'SJ프로젝트 _ 나 너 좋아해 (I like you) Digital Single',
      link: 'https://www.youtube.com/embed/nNRf6SdZYPw',
      start: '2018-04-05T12:00:00',
      end: '2018-04-05T14:00:00',
    },{
      id: "20180422",
      title: '아이유가 좋아│공연',
      description: '더어쿠스틱 - 아,이유가 좋아│자작곡 (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/M_Qurbg8Z2U',
      start: '2018-04-22T19:00:00',
      end: '2018-04-22T20:00:00',
    },{
      id: "20180422",
      title: '눈꽃이 내려오면│공연',
      description: '더어쿠스틱 - 눈꽃이 내려오면│자작곡 (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/cmOQ1qQqtY0',
      start: '2018-04-22T19:00:00',
      end: '2018-04-22T20:00:00',
    },{
      id: "20180422",
      title: 'Stay│공연',
      description: 'Zedd, Alessia Cara - Stay (Cover by 더어쿠스틱) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/OVeJEqO14Is',
      start: '2018-04-22T19:00:00',
      end: '2018-04-22T20:00:00',
    },{
      id: "20180427",
      title: '졸려 (New Ver.)│발매',
      description: '소담 _ 졸려 (New Ver.)',
      link: 'https://www.youtube.com/embed/VT0-Zfl7iuI',
      start: '2018-04-27T12:00:00',
      end: '2018-04-27T14:00:00',
    },{
      id: "20180427",
      title: '졸려 (Acoustic Ver.)│발매',
      description: '소담 _ 졸려 (Acoustic Ver.)',
      link: 'https://www.youtube.com/embed/GA66dj4FV34',
      start: '2018-04-27T12:00:00',
      end: '2018-04-27T14:00:00',
    },{
      id: "20180429",
      title: 'Green Eyes│공연',
      description: '시우 (XIU) - GREEN EYES (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/0i5-ifhxQYk',
      start: '2018-04-29T19:00:00',
      end: '2018-04-29T20:00:00',
    },{
      id: "20180429",
      title: 'Mood indigo│공연',
      description: 'CHEEZE (치즈) - Mood indigo (Cover by 멜팅포인트)',
      link: 'https://www.youtube.com/embed/0i5-ifhxQYk',
      start: '2018-04-29T19:00:00',
      end: '2018-04-29T20:00:00',
    },{     id: "20180429",
      title: 'Keep in touch│공연',
      description: '멜팅포인트(Melting Point) - Keep in touch (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/0i5-ifhxQYk',
      start: '2018-04-29T19:00:00',
      end: '2018-04-29T20:00:00',
    },{     id: "20180429",
      title: 'Habit│공연',
      description: '멜팅포인트(Melting Point) - Habit (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/0i5-ifhxQYk',
      start: '2018-04-29T19:00:00',
      end: '2018-04-29T20:00:00',
    },{
      id: "20180430",
      title: 'Green eyes│발매',
      description: '시우(XIU) _ Green eyes (Digital Single)',
      link: 'https://www.youtube.com/embed/XfkGeLE7PYQ',
      start: '2018-04-30T14:00:00',
      end: '2018-04-30T18:00:00',
    },{
      id: "20180513",
      title: 'Stars│공연',
      description: '로시 (Rothy) - Stars (Cover by. 소라닌) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/-OgE3Vl-AM8',
      start: '2018-05-13T19:00:00',
      end: '2018-05-13T20:00:00',
    },{
    },{
      id: "20180513",
      title: 'Like a dream│공연',
      description: 'Chrisette Michele - Like a Dream (Cover by. 소라닌) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/5UQ8MdgPz8g',
      start: '2018-05-13T19:00:00',
      end: '2018-05-13T20:00:00',
    },{
    },{
      id: "20180513",
      title: '좋다│공연',
      description: '데이브레이크 (DAYBREAK) - 좋다 (Cover by. 소라닌) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/_M0lQsVxT5o',
      start: '2018-05-13T19:00:00',
      end: '2018-05-13T20:00:00',
    },{
      id: "20180520",
      title: '봄을 그리다│공연',
      description: '어반자카파 - 봄을 그리다 (Cover by. 베리마치) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/MW6zX8hZ4Xc',
      start: '2018-05-20T19:00:00',
      end: '2018-05-20T20:00:00',
    },{
      id: "20180520",
      title: '웃으며 넘길래│공연',
      description: '제이레빗 - 웃으며 넘길래 (Cover by. 베리마치) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/S3AnjLOdDnU',
      start: '2018-05-20T19:00:00',
      end: '2018-05-20T20:00:00',
    },{
      id: "20180520",
      title: 'JUMP│공연',
      description: '김동률 - Jump (Cover by. 베리마치) (신사동 오픈마이크)',
      link: 'https://www.youtube.com/embed/1p3je6-DDLU',
      start: '2018-05-20T19:00:00',
      end: '2018-05-20T20:00:00',
    },{
      id: "20180521",
      title: '안녕, 호두│발매',
      description: '귤(GYUL) _ 안녕, 호두 (Digital Single)',
      link: 'https://www.youtube.com/embed/aoR901S_C6k',
      start: '2018-05-21T14:00:00',
      end: '2018-05-21T18:00:00',
    },{
      id: "20180531",
      title: 'PINK RUSH│발매',
      description: '시우(XIU) _ PINK RUSH (Digital Single)',
      link: '',
      start: '2018-05-31T14:00:00',
      end: '2018-05-31T18:00:00',
    },{
      id: "20180603",
      title: '더블유닉│공연',
      description: '힙합씬/더블유닉 (신사동 오픈마이크 공연)',
      start: '2018-06-03T19:00:00',
      end: '2018-06-03T20:00:00',
    },{
      id: "20180603",
      title: '뮤지션│작곡모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-03T14:00:00',
      end: '2018-06-03T16:00:00',
    },{
      id: "20180603",
      title: '좋아하더라 앨범│녹음',
      description: '쥬 - 좋아하더라 Feat.귤(GYUL) 앨범 녹음  장소 : 타임사운드',
      start: '2018-06-03T18:00:00',
      end: '2018-06-03T20:00:00',
    },{
      id: "20180605",
      title: '미인 데모│녹음',
      description: '시우 프로듀싱 프로젝트/이지 - 미인 데모 녹음  장소 : 타임사운드',
      start: '2018-06-05T18:00:00',
      end: '2018-06-05T20:00:00',
    },{
      id: "20180605",
      title: '하루기타│촬영',
      description: '쥬/하루기타 커버 곡 장소 : 마호의 테이블',
      start: '2018-06-05T16:00:00',
      end: '2018-06-05T18:00:00',
    },{
      id: "20180607",
      title: 'Red dot 데모│녹음',
      description: '시우 프로듀싱 프로젝트/진우 - Red dot 데모 녹음 장소 : 타임사운드',
      start: '2018-06-07T18:00:00',
      end: '2018-06-07T20:00:00',
    },{
      id: "20180608",
      title: '뮤지션│보컬모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-08T20:00:00',
      end: '2018-06-08T22:00:00',
    },{
      id: "20180608",
      title: '깔라이브│촬영',
      description: '장소 : 마호의 테이블',
      start: '2018-06-08T18:00:00',
      end: '2018-06-08T20:00:00',
    },{
      id: "20180609",
      title: 'Paint 데모│녹음',
      description: '시우 프로듀싱 프로젝트/시우 - Paint 데모 녹음  장소 : 타임사운드',
      start: '2018-06-09T18:00:00',
      end: '2018-06-09T20:00:00',
    },{
      id: "20180610",
      title: '김진│공연',
      description: '싱어송 라이터/김진 (신사동 오픈마이크 공연)',
      start: '2018-06-10T19:00:00',
      end: '2018-06-10T20:00:00',
    },{
      id: "20180610",
      title: '뮤지션│작곡모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-10T14:00:00',
      end: '2018-06-10T16:00:00',
    },{
      id: "20180612",
      title: '하루기타│촬영',
      description: '쥬/하루기타 커버 곡 장소 : 마호의 테이블',
      start: '2018-06-12T16:00:00',
      end: '2018-06-12T18:00:00',
    },{
      id: "20180613",
      title: '그냥 데모│녹음',
      description: '시우 프로듀싱 프로젝트/한결 - 그냥 데모 녹음  장소 : 타임사운드',
      start: '2018-06-13T18:00:00',
      end: '2018-06-13T20:00:00',
    },{
      id: "20180614",
      title: 'Follow me 데모│녹음',
      description: '시우 프로듀싱 프로젝트/귤 - Follow me 데모 녹음  장소 : 타임사운드',
      start: '2018-06-14T18:00:00',
      end: '2018-06-14T20:00:00',
    },{
      id: "20180615",
      title: '뮤지션│보컬모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-15T20:00:00',
      end: '2018-06-15T22:00:00',
    },{
      id: "20180615",
      title: '깔라이브│촬영',
      description: '장소 : 마호의 테이블',
      start: '2018-06-15T18:00:00',
      end: '2018-06-15T20:00:00',
    },{
      id: "20180617",
      title: '프리지아│공연 예정',
      description: '싱어송 라이터/프리지아 (신사동 오픈마이크 공연)',
      start: '2018-06-17T19:00:00',
      end: '2018-06-17T20:00:00',
    },{
      id: "20180617",
      title: '뮤지션│작곡모임 예정',
      description: '장소 : 마호의 테이블',
      start: '2018-06-17T14:00:00',
      end: '2018-06-17T16:00:00',
    },{
      id: "20180619",
      title: '하루기타│촬영',
      description: '쥬/하루기타 커버 곡 장소 : 마호의 테이블',
      start: '2018-06-19T16:00:00',
      end: '2018-06-19T18:00:00',
    },{
      id: "20180622",
      title: '뮤지션│보컬모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-22T20:00:00',
      end: '2018-06-22T22:00:00',
    },{
      id: "20180622",
      title: '깔라이브│촬영',
      description: '장소 : 마호의 테이블',
      start: '2018-06-22T18:00:00',
      end: '2018-06-22T20:00:00',
    },{
      id: "20180624",
      title: '뮤지션│작곡모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-24T14:00:00',
      end: '2018-06-24T16:00:00',
    },{
      id: "20180626",
      title: '하루기타│촬영',
      description: '쥬/하루기타 커버 곡 장소 : 마호의 테이블',
      start: '2018-06-26T16:00:00',
      end: '2018-06-26T18:00:00',
    },{
      id: "20180629",
      title: '뮤지션│보컬모임',
      description: '장소 : 마호의 테이블',
      start: '2018-06-29T20:00:00',
      end: '2018-06-29T22:00:00',
    },{
      id: "20180629",
      title: '깔라이브│촬영',
      description: '장소 : 마호의 테이블',
      start: '2018-06-29T18:00:00',
      end: '2018-06-29T20:00:00',
      }],
    eventColor: '#ffffff',
    eventTextColor: '#000000',
    displayEventTime: false,
    eventRender: function(eventObj, $el) {
      $el.popover({
        title: eventObj.title,
        content: eventObj.description,
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      });
    },
   
    eventClick: function(calEvent, jsEvent, view) {
      var time = ''
      time += moment(calEvent.start).format('A hh:mm') + ' - '
      time += moment(calEvent.end).format('A hh:mm')
      $('.popup-time').text(time)
      $('.popup-title').text(calEvent.title)
      // $('.popup-time').text(calEvent.date())
      $('.popup-video').attr('src', calEvent.link +
        '?enablejsapi=1' +
        '&wmode=opaque&vq=hd1080&autoplay=1' +
        '&modestbranding=1&autohide=1&rel=0&showinfo=0&controls=0"'
      )
      // $('.popup-time').text(calEvent.title)

      $(function() { resizeYoutube() } )
      $('#my_popup').popup('show')
    }
  
    
  };
  
  var arrayWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  var first_event = _.min(opts.events, function(event){
    var start = event.start;
    return moment(start).unix();
  });
  var last_event = _.max(opts.events, function(event){
    var end = event.end ? event.end : event.start;
    return moment(end).unix();
  });
  var min_date = moment(first_event.start);
  var max_date = moment(last_event.end || last_event.start); 
  
  opts.dayRender = function(min_date, max_date, date, cell){
    var before_min = date.diff(min_date, "days") < 0;
    var after_max = date.diff(max_date, "days") >= 0;
    var temp = $('#calendar').fullCalendar('getDate')
    var curr = new Date(temp).getMonth()

    if (curr === date.month()) {
      cell.append(
        '<div class="day-bg">' + 
        '<p class="day-name"><span class="day-number">' + date.date() +
        '</span><span class="week-day">' + arrayWeek[date.weekday()] + 
        '</span></p>' +
        '</div>'
       )
    }
  }.bind(this, min_date, max_date);
  
  $('#calendar').fullCalendar(opts);

});