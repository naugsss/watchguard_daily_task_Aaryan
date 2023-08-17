# plot the data present in the file http://www.pythonhow.com/data/sampledata.txt

import pandas
import pylab as plt
 
data = pandas.read_csv("http://www.pythonhow.com/data/sampledata.txt")
data.plot(x='x', y='y', kind='scatter')
plt.show()