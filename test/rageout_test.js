var should = require('should');

var fs = require('fs');
var rageout = require('../lib/rageout');

describe('serializeData', function () {
    it('should output valid JSON', function () {
        var obj = [{
            id: 'foo',
            name: 'bar'
        }, {
            id: 'baz',
            name: 'foobar'
        }];
        rageout.serializeData(obj).should.equal('[{"id":"foo","name":"bar"},{"id":"baz","name":"foobar"}]');
    });
});

describe('outputFile', function () {
    var str = '{"foo":"bar"}';
    var filepath = 'test.json';

    it('should write a JSON file to disk without error', function (done) {
        rageout.outputFile(str, filepath, function (err) {
            if (err) return done(err);
            fs.readFile(filepath, { encoding: 'utf8' }, function (err, data) {
                if (err) return done(err);
                data.should.equal(str);
                fs.unlink(filepath, done);
            });
        });
    });

    it('should throw error if arguments are invalid', function () {
        rageout.outputFile.bind(rageout, '', filepath).should.throw();
        rageout.outputFile.bind(rageout, null, filepath).should.throw();
        rageout.outputFile.bind(rageout, undefined, filepath).should.throw();
        rageout.outputFile.bind(rageout, {}, filepath).should.throw();
        rageout.outputFile.bind(rageout, str, '').should.throw();
        rageout.outputFile.bind(rageout, str, null).should.throw();
        rageout.outputFile.bind(rageout, str, undefined).should.throw();
        rageout.outputFile.bind(rageout, str, {}).should.throw();
        rageout.outputFile.bind(rageout, str, filepath, 'durr').should.throw();
        rageout.outputFile.bind(rageout, str, filepath, null).should.throw();
        rageout.outputFile.bind(rageout, str, filepath, {}).should.throw();
        rageout.outputFile.bind(rageout, str, filepath).should.throw();
    });
});

