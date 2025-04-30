const xs = tf.tensor2d([-6, -5, -4, -3, -2, -1, 0, 1, 2], [9, 1]);
const ys = tf.tensor2d([2 * -6 + 6, 2 * -5 + 6, 2 * -4 + 6, 2 * -3 + 6, 2 * -2 + 6, 2 * -1 + 6, 2 * 0 + 6, 2 * 1 + 6, 2 * 2 + 6], [9, 1]);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

async function trainModel() {
    await model.fit(xs, ys, { epochs: 350 });
    console.log('¡Entrenamiento completo!');
    document.getElementById('predictButton').disabled = false;
}

function predictY() {
    const inputX = parseFloat(document.getElementById('inputX').value);
    if (isNaN(inputX)) {
        document.getElementById('output').innerText = "Por favor, ingresa un número válido.";
        return;
    }
    const inputTensor = tf.tensor2d([inputX], [1, 1]);
    const prediction = model.predict(inputTensor);
    prediction.data().then(result => {
        document.getElementById('output').innerText = `El valor predicho de Y es: ${result[0]}`;
    });
}

document.getElementById('predictButton').addEventListener('click', predictY);

trainModel();F