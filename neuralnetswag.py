from pybrain.tools.shortcuts import buildNetwork
from pybrain.datasets import SupervisedDataSet
from pybrain.supervised.trainers import BackpropTrainer
from pybrain.structure import TanhLayer
ds = SupervisedDataSet(4, 1)
net = buildNetwork(4, 1, 1, bias=True, hiddenclass=TanhLayer)


rusgdp = [1281959, 1213976, 1123012, 1042722, 980002, 914181, 851986, 813740, 774253, 703867, 661529, 698552, 688907, 714634, 745187, 853593, 934932, 1093488, 1151040, 872466];
korgdp = [928479, 883425, 839757, 807459, 770958, 747781, 705179, 673289, 620582, 566815, 598526, 571926, 534517, 490745, 453344, 429744, 407582, 373150, 340751];
japgdp = [2904141, 2924613, 2858859, 2802803, 2750543, 2686224, 2639801, 2632907, 2628056, 2554893, 2558595, 2636148, 2590265, 2504246, 2454919, 2428242, 2422245, 2398928, 2321153, 2208858];
chngdp = [8908894, 8306661, 7928475, 7268725, 6699034, 6187983, 5374025, 4780797, 4319339, 3961441, 3717352, 3706647, 3521141, 3450084, 2997060, 2724344, 2483921, 2263794, 2123852];
indgdp = [3415183, 3182835, 2909356, 2649687, 2426453, 2257166, 2080337, 2009448, 1899526, 1819937, 1715943, 1611108, 1537383, 1425623, 1328047, 1238272, 1169301, 1112340, 1098100, 1043912];
for a, b, c, d, e in zip(rusgdp, korgdp, japgdp, indgdp, chngdp):
    ds.addSample((a, b, c, d,), (e,));

trainer = BackpropTrainer(net, ds)
trained = False
acceptableError = 10.0

while trained == False :
    error = trainer.train()
    if error < acceptableError :
        trained = True
result = net.activate([1175000, 1449000, 4210000, 1498870])
print(result)
