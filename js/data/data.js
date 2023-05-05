//feedbacks
const feedbacks = [
	{
		name: "Иван",
		text: "Очень рады что обратились к Анастасии! Обязательная и милая девушка, учла все наши хотелки) и с понимаением отнеслась к нашей ситуации. Спасибо большое, процветание вашему делу!"
	},
	{
		name: "Инна",
		text: "Очень приятно было общаться! Заказ выполнили красивым, все моменты уточняли и обсуждали, никаких противоречий, очень приятная девушка. Шары красивые, были упакованы, было удобно разместить в машине."
	},
	{
		name: "Роман",
		text: "Спасибо Анастасии за прекрасную композицию! Сынулька был рад и целый день играет с шариками. Очень быстро договорились с ней. Шарики были упакованы. Привезли даже очень в позднее время, как мне было удобно. Это я считаю сервис!!! Рекомендую, однозначно! Цены хорошие) Процветания вашему делу)"
	},
	{
		name: "Татьяна",
		text: "Приятная девушка, обязательная и крайне клиентоориентированная, отвечала мне в 1:30 ночи. Отвечает очень быстро, соблюдает все договорённости. Лёгкая и прятная в коммуникации."
	},
	{
		name: "Елена",
		text: "Спасибо большое! Очень удобная услуга 'Цифры в аренду'. Изготовили, доставили, забрали. Всё чётко и вовремя. Ваши цифры очень украсили наш праздник!"
	},
	{
		name: "Татьяна",
		text: "Большое спасибо, договорились c девушкой на определённое время, большое спасибо ещё раз, всё понравилось!"
	},
]

//sets
const cost = {
	latex: 120,
	hrom_conf: 160,
	numHe: 1000,
	numSt: 750,
	folgMal: 280,
	folgBol: 900,
	textMal: 150,
	textBol: 300,
	shar90: 750,
	glasses: 1500,
	figMal: 600,
	figSr: 800,
	figBol: 950,
	brush_agat: 180,
	bConf: 1400,
	bFeathers: 1500,
	picture: 140,
	mini: 50,
	air: 35,

	numMetr_Ar: 800,
	numMetr_Pk: 2100,

	bx6060: 1000,
	bx6080: 1200,
}

const sets = {
	all: [
		{
			src: "assets/catalog/she/she1.webp",
			title: "Для неё",
			category: `she`,
		},
		{
			src: "assets/catalog/he/he1.webp",
			title: "Для него",
			category: `he`,
		},
		{
			src: "assets/catalog/kid/kid1.webp",
			title: "Для детей",
			category: `kid`,
		},
		{
			src: "assets/catalog/vp/vp1.webp",
			title: "Выписка",
			category: `vp`,
		},
		{
			src: "assets/catalog/nm/nm1.webp",
			title: "Цифры",
			category: `nm`,
		},
		{
			src: "assets/catalog/bx/bx1.webp",
			title: "Коробки",
			category: `bx`,
		},
	],
	she: [
		{
			price: {
				hrom_conf: 7,
			}
		},
		{
			price: {
				hrom_conf: 4,
				brush_agat: 2,
				numHe: 1,
				figSr: 1,
				folgMal: 1,
			}
		},
		{
			price: {
				latex: 4,
				hrom_conf: 6,
				numHe: 1,
			}
		},
		{
			price: {
				latex: 4,
				hrom_conf: 3,
				brush_agat: 3,
				shar90: 1,
				textBol: 1,
			}
		},
		{
			price: {
				hrom_conf: 9,
				glasses: 1,
				textBol: 1,
			}
		},
		{
			price: {
				numHe: 2,
				folgMal: 1,
				hrom_conf: 3,
				latex: 3,
			}
		},
		{
			price: {
				numHe: 2,
				glasses: 1,
				textBol: 1,
				hrom_conf: 10,
			}
		},
		{
			price: {
				figSr: 2,
				folgMal: 2,
				latex: 18,
			}
		},
		{
			price: {
				latex: 4,
				folgMal: 3,
				hrom_conf: 3,
				textMal: 1,
			}
		},
		{
			price: {
				figSr: 3,
				hrom_conf: 2,
				latex: 3,
			}
		},
		{
			price: {
				numHe: 2,
				hrom_conf: 7,
				latex: 3,
			}
		},
		{
			price: {
				numHe: 2,
				hrom_conf: 4,
				latex: 3,
			}
		},
		{
			price: {
				folgMal: 3,
				textMal: 1,
				hrom_conf: 4,
			}
		},
		{
			price: {
				numHe: 1,
				folgMal: 5,
			}
		},
		{
			price: {
				glasses: 1,
				textBol: 1,
				hrom_conf: 3,
				latex: 3,
			}
		},
		{
			price: {
				numSt: 2,
			}
		},
		{
			price: {
				latex: 6,
				hrom_conf: 4,
				folgMal: 1,
				numHe: 2,
			}
		},
		{
			price: {
				folgMal: 1,
				hrom_conf: 4,
				latex: 2,
			}
		},
		{
			price: {
				hrom_conf: 9,
				latex: 6
			}
		},
		{
			price: {
				figSr: 1,
				hrom_conf: 2,
				latex: 3,
			}
		},
		{
			price: {
				folgBol: 1,
				textBol: 1,
				hrom_conf: 10,
			}
		},
		{
			price: {
				latex: 6,
				folgMal: 4,
				hrom_conf: 6,
			}
		},
		{
			price: {
				latex: 8,
				folgMal: 1,
				hrom_conf: 2,
			}
		},
		{
			price: {
				numHe: 2,
				latex: 6,
				hrom_conf: 8,
			}
		},
		{
			price: {
				brush_agat: 2,
				folgMal: 2,
				latex: 4,
				hrom_conf: 6,
			}
		},
		{
			price: {
				shar90: 1,
				textBol: 1,
				hrom_conf: 4,
				folgMal: 1,
				latex: 6,
			}
		},
		{
			price: {
				folgMal: 1,
				latex: 6,
				hrom_conf: 3,
			}
		},
		{
			price: {
				numHe: 1,
				folgMal: 2,
				hrom_conf: 5,
				latex: 5,
			}
		},
		{
			price: {
				bConf: 1,
				textBol: 1,
				latex: 8,
				hrom_conf: 2,
			}
		},
		{
			price: {
				hrom_conf: 2,
				hrom_conf: 2,
				latex: 3,
			}
		},
		{
			price: {
				hrom_conf: 3,
				latex: 6,
				folgMal: 1,
				figSr: 1,
			}
		},
		{
			price: {
				numHe: 1,
				hrom_conf: 7,
			}
		},
		{
			price: {
				numHe: 2,
				folgMal: 5,
				hrom_conf: 2,
			}
		},
	],
	he: [
		{
			price: {
				hrom_conf: 7,
				brush_agat: 3,
				numHe: 1,
			}
		},
		{
			price: {
				shar90: 1,
				textBol: 1,
				folgMal: 2,
				textMal: 2,
				hrom_conf: 2,
				latex: 3,
			}
		},
		{
			price: {
				hrom_conf: 6,
				latex: 2,
				folgMal: 2,
				textBol: 1,
				textBol: 1,
			}
		},
		{
			price: {
				latex: 21,
				glasses: 1,
				brush_agat: 4,
				hrom_conf: 8,
				textBol: 1,
			}
		},
		{
			price: {
				latex: 20,
				numHe: 2,
			}
		},
		{
			price: {
				hrom_conf: 6,
				folgMal: 2,
				textMal: 2,
				latex: 3,
			}
		},
		{
			price: {
				latex: 14,
				shar90: 1,
				textBol: 1,
				hrom_conf: 6,
			}
		},
		{
			price: {
				bConf: 1,
				textBol: 1,
				latex: 10,
			}
		},
		{
			price: {
				folgBol: 1,
				textBol: 1,
				latex: 5,
			}
		},
		{
			price: {
				latex: 4,
				folgMal: 1,
				textMal: 1,
			}
		},
		{
			price: {
				hrom_conf: 7,
				latex: 3,
			}
		},
		{
			price: {
				folgBol: 1,
				folgMal: 5,
				hrom_conf: 5,
			}
		},
		{
			price: {
				hrom_conf: 4,
				latex: 2,
				folgMal: 1,
				textMal: 1,
			}
		},
		{
			price: {
				folgBol: 1,
				textBol: 1,
				folgMal: 1,
				textMal: 1,
				latex: 6,
				brush_agat: 2,
			}
		},
		{
			price: {
				latex: 4,
				folgMal: 1,
				hrom_conf: 6,
			}
		},
	],
	kid: [
		{
			price: {
				latex: 12,
				numHe: 2,
			}
		},
		{
			price: {
				figSr: 2,
				folgMal: 1,
				textMal: 1,
			}
		},
		{
			price: {
				picture: 5,
				folgBol: 1,
				textBol: 1,
			}
		},
		{
			price: {
				figSr: 1,
				latex: 7,
				hrom_conf: 1,
			}
		},
		{
			price: {
				figBol: 1,
				brush_agat: 3,
				hrom_conf: 2,
				picture: 4,
			}
		},
		{
			price: {
				numHe: 1,
				hrom_conf: 2,
				latex: 6,
				figMal: 1,
			}
		},
		{
			price: {
				numHe: 1,
				figBol: 1,
				folgMal: 5,
				latex: 2,
				hrom_conf: 3,
			}
		},
		{
			price: {
				mini: 40,
				figBol: 1,
			}
		},
		{
			price: {
				figBol: 1,
				latex: 2,
				hrom_conf: 3,
			}
		},
		{
			price: {
				folgMal: 1,
				textMal: 1,
				latex: 6,
				hrom_conf: 2,
				numSt: 1,
			}
		},
		{
			price: {
				figSr: 1,
				latex: 7,
			}
		},
		{
			price: {
				numHe: 1,
				figSr: 1,
				latex: 5,
				hrom_conf: 2,
			}
		},
		{
			price: {
				figSr: 1,
				latex: 6,
				hrom_conf: 4,
			}
		},
		{
			price: {
				hrom_conf: 2,
				latex: 8,
				folgMal: 1,
				textMal: 1,
				figSr: 1,
			}
		},
		{
			price: {
				folgMal: 1,
				latex: 12,
			}
		},
		{
			price: {
				picture: 10,
				figSr: 1,
				folgBol: 1,
				textBol: 1,
			}
		},
	],
	vp: [
		{
			price: {
				latex: 10,
				glasses: 1,
			}
		},
		{
			price: {
				latex: 15,
				hrom_conf: 6,
				folgMal: 2,
				folgBol: 1,
			}
		},
		{
			price: {
				glasses: 1,
				hrom_conf: 5,
				latex: 3,
				textBol: 1,
			}
		},
		{
			price: {
				figBol: 3,
				glasses: 1,
				latex: 10,
				textMal: 1,
			}
		},
		{
			price: {
				glasses: 1,
				latex: 10,
				hrom_conf: 5,
			}
		},
		{
			price: {
				figBol: 3,
				glasses: 1,
				textBol: 1,
				folgMal: 1,
				textMal: 1,
				latex: 10,
				hrom_conf: 5,
			}
		},
		{
			price: {
				glasses: 1,
				figBol: 1,
				folgMal: 2,
				latex: 3,
				textBol: 1,
			}
		},
		{
			price: {
				figSr: 2,
				folgMal: 2,
				textMal: 2,
				latex: 7,
			}
		},
	],
	bx: [
		{
			price: {
				bx6060: 1,
				textBol: 1,
				mini: 30,
			}
		},
		{
			price: {
				bx6080: 1,
				textMal: 3,
				textBol: 1,
				folgMal: 10,
			}
		},
		{
			price: {
				bx6080: 1,
				folgMal: 6,
				folgBol: 1,
				textBol: 1,
			}
		},
	],
	nm: [
		{
			price: {
				numMetr: 1,
			}
		},
		{
			price: {
				numMetr: 1,
			}
		},
		{
			price: {
				numMetr: 1,
			}
		},
		{
			price: {
				numMetr: 2,
			}
		},
		{
			price: {
				numMetr: 1,
			}
		},
	]
}
