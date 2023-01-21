const moment = require('moment-timezone');
const _ = require('lodash');

const pascoa = year => {
	let f = Math.floor,
		G = year % 19,
		C = f(year / 100),
		H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
		I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
		L = I - J,
		month = 3 + f((L + 40) / 44),
		day = L + 28 - 31 * f(month / 4);

	return [month, day];
};

const feriado = data => {
	if (!data) return false;

	const ano = moment(data).get("year");
	const date = moment(data).startOf('date').unix();

	const dia_pascoa = pascoa(ano)[1];
	const mes_pascoa = pascoa(ano)[0];
	const ano_pascoa = ano;

	let feriados = [
		// Datas Fixas dos feriados Nacionail Basileiras
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 1 - 1, date: 1, year: ano}).unix(), // Confraternização Universal - Lei nº 662, de 06/04/49
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 4 - 1, date: 21, year: ano}).unix(), // Tiradentes - Lei nº 662, de 06/04/49
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 5 - 1, date: 1, year: ano}).unix(), // Dia do Trabalhador - Lei nº 662, de 06/04/49
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 9 - 1, date: 7, year: ano}).unix(), // Dia da Independência - Lei nº 662, de 06/04/49
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 10 - 1, date: 12, year: ano}).unix(), // N. S. Aparecida - Lei nº 6802, de 30/06/80
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 11 - 1, date: 2, year: ano}).unix(), // Todos os santos - Lei nº 662, de 06/04/49
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 11 - 1, date: 15, year: ano}).unix(), // Proclamação da republica - Lei nº 662, de 06/04/49
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: 12 - 1, date: 25, year: ano}).unix(), // Natal - Lei nº 662, de 06/04/49

		// Feriados em que a data depende da páscoa
		// moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: mes_pascoa - 1, date: dia_pascoa - 48,  year: ano_pascoa}).unix(), // 2º feria Carnaval
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: mes_pascoa - 1, date: dia_pascoa - 47, year: ano_pascoa}).unix(), // 3º feria Carnaval 
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: mes_pascoa - 1, date: dia_pascoa - 2, year: ano_pascoa}).unix(), // 6º feira Santa  
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: mes_pascoa - 1, date: dia_pascoa, year: ano_pascoa}).unix(), // Pascoa
		moment().set({hour: 0, minute: 0, second: 0, millisecond: 0, month: mes_pascoa - 1, date: dia_pascoa + 60, year: ano_pascoa}).unix(), // Corpus Cirist
	];

    feriados = _.orderBy(feriados);
    
	for (let i in feriados)
		if (date == feriados[i])
			return true;
	
	return false;
};

const fimSemana = data => {
	const dia_semana = moment(data).weekday();
	if (dia_semana == 0 || dia_semana == 6) return true;
	else return false;
}

const diaUtil = data => {
	while (fimSemana(data) || feriado(data)) {
		data = moment(data).add(1, 'days');
	}
	return data;
};

module.exports = {
    fimSemana,
    feriado,
    diaUtil,
};