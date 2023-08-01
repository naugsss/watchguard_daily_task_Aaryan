import logging

logging.basicConfig(format='%(asctime)s %(levelname)-8s [%(filename)s:%(lineno)d] %(message)s', level=logging.DEBUG, filename='logs.txt')
logger = logging.getLogger('test logger')
logger.warning("This is a warning")
logger.info("This is an info")