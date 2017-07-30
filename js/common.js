(function() {
    let obj = {
        arrGlob: [],
        arrFinal: [],
        arrFinalCount: 0,
        repeatArrayInner: function(arrItem) {
            let val = ('' + arrItem).split('');
            valSum = 0;
            for (let i = 0; i < val.length; i++) {
                valSum += +val[i];
            }
            return valSum;
        },
        calculateNum: function(num) {
            let val = ('' + num).split('');
            valSum = 0;
            for (let i = 0; i < val.length; i++) {
                valSum += +val[i];
            }
            return valSum;
        },
        reRound: function(oldAr) {
            this.arrFinal.splice(0);
            for (let i = 0; i < oldAr.length; i++) {
                let b = 0;
                let k = this.calculateNum(oldAr[i]);
                if (k > 10) {
                    b = this.calculateNum(k);
                    c = this.repeatArrayInner(b);
                    this.arrFinal.push(c);
                } else {
                    this.arrFinal.push(k);
                }
            }
            let count = this.arrFinal.reduce(function(cur, prev) {
                return cur + prev
            });
            if (count > 10) {
                let u = this.calculateNum(count);
                this.arrFinalCount = u;
                return this.arrFinalCount;
            } else {
                this.arrFinalCount = count;
                return this.arrFinalCount;
            }
        },
        calcCountselect: function(i, callback) {
            let val = $('#' + i).val().split(''),
                valSum = 0;
            for (let i = 0; i < val.length; i++) {
                valSum += parseInt(val[i]);
            }
            callback(valSum);
            return valSum;
        },
        roundArr: function(arr) {
            let tempAr = [];
            let self = this;
            for (let i = 0; i < arr.length; i++) {
                this.calcCountselect(arr[i], function(result) {
                    self.arrGlob[i] = result;
                });
            };
            this.reRound(this.arrGlob);
        },
        init: function(selects) {
            this.roundArr(selects);
            $('#result').html(this.arrFinalCount);
            return this.arrFinalCount;
        }
    }
    $('#generate').on('click', function() {
        obj.init(['day', 'year', 'month']);
    })
})()