let soul = [
'2019年11月20日，那一天，是你来长沙入职的第一天，你的与众不同， 就像一个天使，那个笑容，灿烂我整个秋天，你的出现是我唯一的心动，我心里对你的想念充满每一天。',
'2019年12月21日，我的心动，你不知道，我亦不敢表达。在周末的群聊里，偷偷的加了你的微信。',
'2020年1月22日，一直想找机会找你聊天，苦苦没有机会。于是在去年会的路上，进站时丢掉了火车票，通过ppt转找你了解报销情况。然而就没有了然后。。。',
'2014年7月23日，上天眷顾，在王者的时候看见了你，终于让我等到了机会。小姐姐，能带我上王者吗？',
'2020年3月15日，由于疫情原因，你终于来到了长沙。',
'2020年3月17日，还记得我给你送电脑的时候，我破门而入，撕破了隔离封条，我就是最亮的super hero。',
'2020年3月29日，在我租的房子里吃完了饭，回家的路上鼓起了勇气向你表白。',
'2020年5月3日，中间断断续续的约会n次，去过博物馆，爬过岳麓山，长途压马路2万多步，无需多言，自然而然确定关系，在这晚看完电影后我kiss了你',
'2020年5月20日，我们迎来的第一个520，你安排的满满当当。',
'2020年6月28日，接着是我的生日，公司的生日宴会就是从6月开始，后来你的生日',
'2020年8月23日，第一次看电影居然是房地产开发商《八佰》',
'2020年8月25日，第一个七夕，从此以后，生死契阔，与子成说，执子之手，与子偕老。往后余生，风雨是你，平淡是你，清贫是你，荣华是你，心底温柔是你，目光所至，也是你。',
'2020年9月5日，这一晚图谋不轨，结果未遂',
'2020年10月1日，国庆假期，本想陪你去看橘子洲烟花表演',
'2020年10月13日，这个网站建立，记录着我们在一起的每一天。',
];

function randomSoul(){
	document.getElementsByTagName('article')[0].innerHTML = soul[Math.floor(Math.random() * soul.length)].replace(/\*\*(.*?)\*\*/g,'<mark>$1</mark>');
	document.getElementsByTagName('section')[0].className = 'border-' + randomNumBoth(1,6);
}

