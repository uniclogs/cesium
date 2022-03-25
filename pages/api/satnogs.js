export default function Home(req, res) {
    let noradId = req.query.noradId;
    console.log('fetching: https://db.satnogs.org/api/tle/' + noradId + '/?format=json');
    let data = fetch('https://db.satnogs.org/api/tle/' + noradId + '/?format=json');
    return res.status(200).json({data: data});
}
