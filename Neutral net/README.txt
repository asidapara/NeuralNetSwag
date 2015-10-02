## Requirements
 * Python
 * NumPy

To train the network on a custom dataset, you will have to alter the dataset specified in the `main.py` file.

```Python
# training set  Instance( [inputs], [targets] )
trainingset          = [ Instance( [0,0], [0] ), Instance( [0,1], [1] ), Instance( [1,0], [1] ), Instance( [1,1], [0] ) ]

n_inputs             = 2 # Number of inputs to the network
n_outputs            = 1 # Number of outputs in the output layer
n_hiddens            = 2 # Number of nodes in the hidden layers
n_hidden_layers      = 1 # Number of hidden layers

# specify activation functions per layer
activation_functions = [ tanh_function ]*n_hidden_layers + [ sigmoid_function ]

# initialize your neural network
network              = NeuralNet(n_inputs, n_outputs, n_hiddens, n_hidden_layers, activation_functions)

# save the trained network
network.save_to_file( "trained_configuration.pkl" )

# load a stored network configuration
# network = NeuralNet.load_from_file( "trained_configuration.pkl" )

# start training
network.backpropagation(trainingset, ERROR_LIMIT = 1e-4, learning_rate=0.3, momentum_factor=0.9 )

## Save and load learned weights
```Python
network.save_to_file() # store a trained network
network = NeuralNet.load_from_file() # load a trained network
```





```
